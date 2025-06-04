import Navbar from "@/components/Navbar";

const HowITWorks = () => {
  return (
    <section className="bg-gradient-to-tp-[1px]">
      <Navbar />
      <div className="mt-24 w-[80%] mx-auto border px-5 py-5 mb-4 bg-gradient-to-r bg-gradient-to-r from-red-100 to-yellow-100  transform transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-black">
        <h1 className="text-center text-2xl font-bold">How It Works</h1>
        <ul>
          <div>
            <h2 className="font-medium text-xl">1. User Authentication</h2>
            <li className="">
              - Account Creation: Users start by creating an account using their
              email or social media accounts. They fill in basic details like
              name, age, and password.
            </li>
            <li>
              - Login Process: Existing users can log in with their credentials.
              The app ensures a secure authentication process to protect user
              data.
            </li>
          </div>
          <div>
            <h2 className="font-medium text-xl">2. Sport Selection</h2>

            <li>
              - Explore Sports: Once logged in, users can browse through a list
              of available sports. Each sport is presented with a brief
              description to help users choose their area of interest.{" "}
            </li>
            <li>
              - Select a Sport: Users tap on their preferred sport to access
              related content, including lectures and quizzes.
            </li>
          </div>
          <div>
            <h2 className="font-medium text-xl">3. Watch Lectures</h2>

            <li>
              - Video Lectures: The app offers a series of video lectures
              covering the rules, strategies, and techniques of the selected
              sport. Each lecture is designed to be engaging and informative.
            </li>
            <li>
              - Interactive Features: Users can pause, rewind, and fast-forward
              through the videos to ensure they understand the material
              thoroughly.
            </li>
          </div>
          <div>
            <h2 className="font-medium text-xl">4. Take Quizzes</h2>

            <li>
              - MCQ Tests: After watching a lecture, users can attempt
              multiple-choice quizzes designed to reinforce their understanding
              of the content. The quizzes consist of questions that cover key
              concepts from the lectures.
            </li>
            <li>
              - Dynamic Question Sets: Each quiz generates a new set of
              questions every time, ensuring that users can test their knowledge
              repeatedly without encountering the same questions.
            </li>
          </div>
          <div>
            <h2 className="font-medium text-xl">5. Progress Tracking</h2>

            <li>
              - Track Learning Progress: The app keeps track of users’ progress
              through the lectures and quizzes, allowing them to monitor their
              performance over time. Users can see which topics they’ve mastered
              and where they may need to improve.
            </li>
            <li>
              - Achievements and Rewards: Users earn badges and rewards for
              completing quizzes and achieving high scores, motivating them to
              continue learning.
            </li>
          </div>
          <div>
            <h2 className="font-medium text-xl">6. Community Engagement</h2>

            <li>
              - Discussion Forums: Users can engage with others through
              discussion forums related to each sport, sharing tips, strategies,
              and experiences.
            </li>
            <li>
              - Feedback and Support: The app includes a feedback system where
              users can ask questions and receive support from mentors and
              peers.
            </li>
          </div>
          <div>
            <h2 className="font-medium text-xl">7. Future Updates</h2>

            <li>
              - Content Expansion: The app regularly updates its content
              library, adding new sports, lectures, and quizzes based on user
              feedback and trends in the sports industry.
            </li>
            <li>
              - User Suggestions: Users can suggest new features or sports
              they’d like to learn about, contributing to the app’s growth and
              relevance.
            </li>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default HowITWorks;
