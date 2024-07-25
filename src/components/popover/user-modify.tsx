import { Button, ButtonGroup } from "@nextui-org/button";

export const ModifyUserStatus: React.FC = () => (
  <ButtonGroup size="sm">
    <Button
      onPress={() => {
        /* Set user status to refuse */
      }}>
      Refuse
    </Button>
    <Button
      onPress={() => {
        /* Set user status to nope */
      }}>
      Nope
    </Button>
    <Button
      onPress={() => {
        /* Set user status to active */
      }}>
      Active
    </Button>
  </ButtonGroup>
);
