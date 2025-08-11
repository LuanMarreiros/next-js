"use client";

import BuildUI from "@/lib/ui-builder";
import UIContent from "@/ui/content";

export default function Teste(){
    const prop = BuildUI();
    return <UIContent content={prop} />;
}