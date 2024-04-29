import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<span>Carregando...</span>}>
      <div>
        <h1>Home Page</h1>
      </div>
    </Suspense>
  );
}
