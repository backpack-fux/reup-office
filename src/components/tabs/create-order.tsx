import { useState } from "react";

import EmailInput from "@/components/inputs/customerEmail";
import NameInput from "@/components/inputs/customerName";
import PhoneInput from "@/components/inputs/customerPhone";
import AmountInput from "@/components/inputs/orderAmount";
import { OrderID } from "@/components/snippets/orderID";
import { generatePlaceholderOrderID } from "@/utils/helpers";

import {
  formatAmount,
  formatName,
  formatPhone,
  validateAmount,
  validateEmail,
  validateName,
  validatePhone,
} from "@/utils/validation";
import { Button } from "@nextui-org/button";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal";
import { Snippet } from "@nextui-org/snippet";

export default function CreateOrderTab() {
  const [amount, setAmount] = useState("");
  const [amountError, setAmountError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNameChange = (value: string) => {
    const formattedValue = formatName(value);
    setName(formattedValue);
    setNameError(validateName(formattedValue));
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError(validateEmail(value));
  };

  const handleAmountChange = (value: string) => {
    const formattedValue = formatAmount(value);

    setAmount(formattedValue);
    setAmountError(validateAmount(formattedValue));
  };

  const handlePhoneChange = (value: string) => {
    const formattedValue = formatPhone(value);
    setPhone(formattedValue);
    setPhoneError(validatePhone(formattedValue));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nameError && !emailError && !phoneError && !amountError) {
      setIsModalOpen(true);
    }
  };

  const handleConfirm = () => {
    setIsSubmitting(true);
    // TODO: Implement order creation logic here
    setTimeout(() => {
      setIsSubmitting(false);
      setIsModalOpen(false);
      // TODO: Reset form or show success message
    }, 2000);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <OrderID />
        <NameInput value={name} onChange={handleNameChange} error={nameError} />
        <EmailInput
          value={email}
          onChange={handleEmailChange}
          error={emailError}
        />
        <PhoneInput
          value={phone}
          onChange={handlePhoneChange}
          error={phoneError}
        />
        <AmountInput
          value={amount}
          onChange={handleAmountChange}
          error={amountError}
        />
        <Button type="submit">Create Order</Button>
      </form>

      <Modal
        isOpen={isModalOpen}
        scrollBehavior="inside"
        size="3xl"
        onClose={() => setIsModalOpen(false)}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Confirm Order
          </ModalHeader>
          <ModalBody>
            <Snippet
              codeString={`
                Order ID: ${generatePlaceholderOrderID()}
                Name: ${name}
                Email: ${email}
                Phone: ${phone}
                Amount: $${amount}
              `}
              color="default"
              symbol="Receipt"
              variant="bordered">
              <div className="space-y-2">
                <p>
                  <strong>Order ID:</strong> {generatePlaceholderOrderID()}
                </p>
                <p>
                  <strong>Name:</strong> {name}
                </p>
                <p>
                  <strong>Email:</strong> {email}
                </p>
                <p>
                  <strong>Phone:</strong> {phone}
                </p>
                <p>
                  <strong>Amount:</strong> ${amount}
                </p>
              </div>
            </Snippet>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="light"
              onPress={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button
              color="primary"
              isLoading={isSubmitting}
              onPress={handleConfirm}>
              Confirm Order
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
