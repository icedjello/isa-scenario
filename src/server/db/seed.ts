import { products } from "./schema";
import { db } from "./index";

const main = async () => {
  const data: (typeof products.$inferInsert)[] = [
    {
      name: "The Good ISA",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ipa: 4.135,
    },
    {
      name: "The Okay ISA",
      description:
        "Id aliquet lectus proin nibh nisl. Mi bibendum neque egestas congue quisque egestas diam. Tempor id eu nisl nunc mi ipsum.",
      ipa: 2.1,
    },
    {
      name: "The Great ISA",
      description:
        "A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Gravida arcu ac tortor dignissim convallis.",
      ipa: 8,
    },
    {
      name: "The Green ISA",
      description:
        "Mi eget mauris pharetra et ultrices. Blandit libero volutpat sed cras ornare arcu. Gravida quis blandit turpis cursus in hac habitasse platea.",
      ipa: 10.22,
    },
    {
      name: "The Evil ISA",
      description:
        "Mauris cursus mattis molestie a iaculis. Ut consequat semper viverra nam libero justo laoreet sit. At varius vel pharetra vel turpis nunc eget lorem dolor.",
      ipa: 6.66,
    },
    {
      name: "The Standard ISA",
      description:
        "Gravida cum sociis natoque penatibus et magnis dis. Vitae auctor eu augue ut lectus arcu bibendum at varius. Nulla facilisi nullam vehicula ipsum a arcu.",
      ipa: 5,
    },
    {
      name: "The Other ISA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Eu turpis egestas pretium aenean pharetra magna ac placerat.",
      ipa: 7.89,
    },
  ];
  await db.insert(products).values(data);
};

void main();
