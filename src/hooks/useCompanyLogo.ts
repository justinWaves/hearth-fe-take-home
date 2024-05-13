const useCompanyLogo = () => {
  const logos: Record<string, string> = {
    Salesforce: "./images/company-logos/salesforce-logo-sm.png",
    LinkedIn: "./images/company-logos/linkedin-logo-sm.png",
    Intercom: "./images/company-logos/intercom-logo-sm.png",
    Slack: "./images/company-logos/slack-logo-sm.png",
    Google: "./images/company-logos/google-logo-sm.png",
    SendGrid: "./images/company-logos/sendgrid-logo-sm.png",
    Shopify: "./images/company-logos/shopify-logo-sm.png",
    Notion: "./images/company-logos/notion-logo-sm.png",
  };

  const getCompanyLogo = (companyName: string): string => {
    return logos[companyName] || "/images/company-logos/briefcase.png";
  };

  return { getCompanyLogo };
};

export default useCompanyLogo;
