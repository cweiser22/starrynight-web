import {PostFeedItem} from "@/components/feed/post-item";

export default function PostsFeed() {

    return (
        <div className="h-[80vh] overflow-y-auto border rounded-xl p-4 mx-auto max-w-xl">
            <PostFeedItem></PostFeedItem>
            <PostFeedItem></PostFeedItem>
            <PostFeedItem></PostFeedItem>
            <PostFeedItem></PostFeedItem>
            <PostFeedItem></PostFeedItem>
        </div>
    )
}