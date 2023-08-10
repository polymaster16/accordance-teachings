import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "3g815ojc",
  dataset: "production",
  useCdn: false,
  apiVersion: "2021-03-25",
//   token: 'skU8rILHTTrbusIaZ4nDlfzfqAr3FRA4zPP9qLqvwXSm1ovCW6fUFmpEC5kGHQnn0DInZ4nblUoy0p3Z7zHUiOKjURkZnoa6OSQ4UcgzSC8jpWq36JMi0IEOJKgsDyFhYpbi9hicjZ2dr24fGKAlZ7z0hW6cV8nsaJmZ4i5v2FN8BD4hTuF3'
});
