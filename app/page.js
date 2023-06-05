import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Quiz Game</h1>
        <Link href='/quiz'>
          <button>
            Inicie agora o quiz
          </button>
        </Link>
      </div>
    </main>
  )
}