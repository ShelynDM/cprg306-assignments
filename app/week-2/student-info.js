import Link from "next/link";

export default function StudentInfo() {
    return (
    <main>
        <h1>Shelyn del Mundo</h1>
        <p className="hover:underline hover:text-blue-400">
            <Link href="https://github.com/ShelynDM/cprg306-assignments.git">http://github.com</Link>
        </p>
    </main>
    );
  }