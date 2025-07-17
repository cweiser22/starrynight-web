import CommentThread from "@/components/comment/comment-thread";
import {PostDetail} from "@/components/post/post-detail";
import AddComment from "@/components/comment/add-comment";


export default function PostDetailPage() {
    return (
        <>
            <div className={"flex flex-col h-screen lg:w-1/2 w-full mx-auto space-y-4 pt-4"}>
                <PostDetail postPublicId={"12345"} />

                <CommentThread />
            </div>
        </>
    )
}