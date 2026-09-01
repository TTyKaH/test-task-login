const BLACKLISTED_DOMAINS = ["blocked.com"];

export const isEmailBlocked = (email: string): boolean => {
  try {
    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain) return false;

    return BLACKLISTED_DOMAINS.includes(domain);
  } catch (error) {
    console.error("Error checking email blacklist:", error);
    return false;
  }
};
