import ContactTable from "@/components/contact-table/ContactTable";
import { joinClassNames } from "@/utils/join-class-names";
import "./contacts-page.scss";
import { simulateDelay } from "@/utils/simulate-delay";

interface IContactListPageProps {
  className?: string;
}

const baseClassName = "contacts-page";

const ContactListPage: React.FC<IContactListPageProps> = async ({
  className = "",
}) => {
  await simulateDelay(3000);
  return (
    <div className={joinClassNames(baseClassName, className)}>
      <ContactTable />
    </div>
  );
};

export default ContactListPage;
