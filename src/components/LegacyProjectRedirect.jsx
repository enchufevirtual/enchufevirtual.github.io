"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LegacyProjectRedirect = ({ slug }) => {
  const router = useRouter();
  const projectPath = `/project/${encodeURIComponent(slug)}/`;

  useEffect(() => {
    router.replace(projectPath);
  }, [projectPath, router]);

  return (
    <main>
      <p>Esta página de proyecto cambió de dirección.</p>
      <Link href={projectPath}>Continuar al proyecto</Link>
    </main>
  );
};

export default LegacyProjectRedirect;
