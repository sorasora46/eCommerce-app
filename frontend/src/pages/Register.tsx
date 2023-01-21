import { Container } from "../components/Container";
import { TabComponent } from "../components/TabComponent";
import { CustomerRegisterForm } from "../components/login/CustomerRegisterForm";
import { ShopRegisterForm } from "../components/login/ShopRegisterForm";

export const Register = () => {
  // TODO: Add icon to form
  // TODO: Add file (image only) uploader for both of them (set to required)
  return (
    <Container
      width={"100%"}
      height={"100vh"}
      className="flex-column"
      style={{ alignItems: "center", marginTop: "10rem" }}
    >
      <TabComponent
        tabTitles={["Customer", "Shop"]}
        tabBodies={[<CustomerRegisterForm />, <ShopRegisterForm />]}
      />
    </Container>
  );
};
