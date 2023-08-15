import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "3g815ojc",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
  token: 'sk4RUBNXUs8a53GTd3PMnYkzanqhJGsro5iYEPH5fOAQ6CgEMYcyuwyRNqCZPLIBPPuEkhCpnm8kV6yJCjZrhYMKtjPWc4JXmvYZ41Sc4ivdu3a6aI5Up2UYhRW1RwGfeVkwRcwJB8yTMJ1DJdxe3tW6uq88fO1zuryBthGQaMCGdAZT9zcw'
});
