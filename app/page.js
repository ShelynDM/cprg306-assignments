import Link from 'next/link';
export default function Page() {
  return (
    <main className="flex-auto flex-col items-center justify-between p-24">
      <div>
        <h1 className='text-3xl font-bold'>CPRG 306: Web Development 2 - Assignments</h1>
        <div className="text-2xl m-2">
          <ul className="text-lg">
            <li className="hover:text-blue-400 hover:underline">
              <Link href = "week-2">Week 2 Assignment</Link>
            </li>
            <li className="hover:text-blue-400 hover:underline">
              <Link href = "week-3">Week 3 Assignment</Link>
            </li>
            <li className="hover:text-blue-400 hover:underline">
              <Link href = "week-4">Week 4 Assignment</Link>
            </li>
            <li className="hover:text-blue-400 hover:underline">
              <Link href = "week-5">Week 5 Assignment</Link>
            </li>
            <li className="hover:text-blue-400 hover:underline">
              <Link href = "week-6">Week 6 Assignment</Link>
            </li>
            <li className="hover:text-blue-400 hover:underline">
              <Link href = "week-7">Week 7 Assignment</Link>
            </li>
            <li className="hover:text-blue-400 hover:underline">
              <Link href = "week-8">Week 8 Assignment</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}