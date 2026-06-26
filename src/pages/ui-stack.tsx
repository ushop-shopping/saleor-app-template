import { CheckCircle2, Layers3, PackageCheck, Palette } from "lucide-react";
import { motion } from "motion/react";
import { NextPage } from "next";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const checks = [
  {
    label: "Tailwind CSS",
    detail: "Utilities and theme tokens are available.",
    icon: Palette,
  },
  {
    label: "shadcn/ui",
    detail: "Local components render from src/components/ui.",
    icon: Layers3,
  },
  {
    label: "Radix UI",
    detail: "Primitives are installed through the radix-ui package.",
    icon: PackageCheck,
  },
  {
    label: "Motion",
    detail: "React animations are available through motion/react.",
    icon: CheckCircle2,
  },
];

const UiStackPage: NextPage = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="min-h-screen bg-background px-6 py-10 text-foreground"
    >
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <div className="flex flex-col gap-3">
          <Badge variant="secondary" className="w-fit">
            UShop UI stack
          </Badge>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-semibold tracking-normal sm:text-4xl">
              New screens can use shadcn, Tailwind, Radix and lucide.
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
              Macaw remains available for Saleor-native screens. This route validates the new stack
              without changing the app install flow.
            </p>
          </div>
        </div>

        <Separator />

        <div className="grid gap-4 md:grid-cols-4">
          {checks.map((item) => {
            const Icon = item.icon;

            return (
              <Card key={item.label}>
                <CardHeader>
                  <div className="mb-2 flex size-9 items-center justify-center rounded-lg bg-secondary text-secondary-foreground">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle>{item.label}</CardTitle>
                  <CardDescription>{item.detail}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Ready for new UShop-owned UI</CardTitle>
            <CardDescription>
              Keep Macaw for Saleor context. Use this stack when the screen is independent from
              Saleor Dashboard design constraints.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle2 className="size-4 text-primary" aria-hidden="true" />
              <span>Build-time smoke page for the new UI stack.</span>
            </div>
            <Button type="button">
              <CheckCircle2 data-icon="inline-start" aria-hidden="true" />
              Stack installed
            </Button>
          </CardContent>
        </Card>
      </section>
    </motion.main>
  );
};

export default UiStackPage;
