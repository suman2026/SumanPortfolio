export default function NowPage() {
    return ( 
        <main className="container mx-auto px-4 py-12">
            <h1 className="text-3xl md.text-4xl font-bold mb-4">What I,m Working on now</h1>
            <p className="text-gray-600 dark:text-gray-300 mb-8">Last updated:April 21,2025</p>

            <div className="space-y-8">
                <section>
                    <h2 className=" text-2xl font-bold mb-4">Current Project</h2>
                    <p> Description of what you are currently building...</p>
                </section>
                <section> 
                    <h2 className="text-2xl font-bold mb-4">Learning</h2>
                    <p> Technologies or concepts you are currently learning....</p>
                </section>

                <section> 
                    <h2 className="text-2xl font-bold mb-4">Reading</h2>
                    <p> Books or articles you are currently reading....</p>
                </section>
            </div>
        </main>
    );
}