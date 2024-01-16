import Link from "next/link";

import Heading from "./heading";

export default function Page() {
    let a = 5;
    let b = 6;
    let c = a + b;
    return (
        <main>
            <h1>CPRG 306 Demos</h1>
            <Heading/>
            <p>
                <Link href = "week-2">Week 2</Link>
            </p>
            <p>This is a paragraph</p>
            <p>This is another paragraph</p>
            <p>The value of a is {a}.</p>
            <p>The value of a and b is {a + b}</p>
        </main>
    
    );
  }