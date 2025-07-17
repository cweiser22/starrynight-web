import PostsFeed from "@/components/feed/posts-feed";

export default function Home(){
    return (
        <div className={"flex-1 overflow-y-auto "}>
            <PostsFeed/>
        </div>
    )
}