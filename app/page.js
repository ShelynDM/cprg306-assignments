import Link from 'next/link';
export default function Page() {
  return (
    <main className="m-3">
      <div>
        <h1 className='text-3xl'>CPRG 306: Web Development 2 - Assignments</h1>
      </div>

      <div className="text-2xl m-2">
        <ul>
          <li>
            <Link href = "week-2">Week 2</Link>
          </li>
          <li>
            <Link href = "week-3">Week 3</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}