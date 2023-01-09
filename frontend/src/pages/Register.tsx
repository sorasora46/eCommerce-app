import { Container } from "../components/Container";
import { TabComponent } from "../components/TabComponent";
import { CustomerRegisterForm } from "../components/login/CustomerRegisterForm";
import { ShopRegisterForm } from "../components/login/ShopRegisterForm";

export const Register = () => {
  return (
    <Container
      width={"100%"}
      height={"100vh"}
      className="flex-column center-items"
    >
      <TabComponent
        tabTitles={["Customer", "Shop"]}
        tabBodies={[<CustomerRegisterForm />, <ShopRegisterForm />]}
      />
    </Container>
  );
};
