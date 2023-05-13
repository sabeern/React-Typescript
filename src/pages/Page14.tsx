import React from "react";
import DifferentElement from "../components/DifferentElement";

function Page14() {
  return (
    <div>
      <DifferentElement size="sm" color="green" as="h1">
        This is a heading
      </DifferentElement>
      <DifferentElement size="md" as="p">
        This is a paragraph
      </DifferentElement>
      <DifferentElement size="lg">This is a div</DifferentElement>
    </div>
  );
}

export default Page14;
