import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        As a recent computer science graduate, I bring a solid foundation in coding with Java and C, alongside proficiency in web development and database languages such as MongoDB and SQL. 
        My previous roles involved rigorous SSD and GPU testing for industry giants like Intel and Nvidia. 
        With a keen interest in software engineering and information technology, I'm eager to leverage my skills and experience in dynamic professional environments.
      </p>
      <p className="mb-4">
        Download my resume <a href="link-to-your-pdf" download>here</a>.
      </p>
    </section>
  )
}