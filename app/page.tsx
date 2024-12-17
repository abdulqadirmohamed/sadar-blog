import Footer from "@/components/Footer";
import MainPost from "@/components/main-post";
import Posts from "@/components/posts";
import SecondPosts from "@/components/second-posts";
import Subscribe from "@/components/Subscribe";


export default function Home() {
  return (
    <>
      <MainPost/>
      <SecondPosts/>
      <Posts/>
      <Subscribe/>
      <Footer/>
    </>
  );
}
