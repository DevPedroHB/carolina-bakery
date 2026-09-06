"use client";

export function FooterCopyright() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-4 border-primary border-t text-center">
      <p className="text-muted-foreground text-xs">
        © {currentYear} Padaria Carolina - Todos os direitos reservados.
      </p>
    </div>
  );
}
