import {Card, CardContent, CardHeader} from "@/components/ui/card"
import {MessageCircleReply} from "lucide-react";
import {Button} from "@/components/ui/button";

interface Comment{
    publicId: string;
    text: string;
    replies: Comment[];
    author: string;
}

interface CommentProps {
    comment: Comment;
}

function Comment({ comment }: CommentProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center space-x-2">
                    <img
                        src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${comment.author}`}
                        className="w-6 h-6 aspect-square rounded-full"
                        alt={`${comment.author}'s avatar`}
                    />
                    <h4 className="text-sm font-semibold">{comment.author}</h4>
                </div>
            </CardHeader>
            <CardContent className="space-y-2">
                <p className={"text-sm"}>{comment.text}</p>

                <Button className={"bg-transparent hover:bg-transparent text-muted-foreground hover:text-muted-foreground"} variant={"ghost"} size={"sm"}>
                    <MessageCircleReply/>
                    Reply
                </Button>

                {comment.replies && comment.replies.length > 0 && (
                    <div>
                        {comment.replies.map(reply => (
                            <Comment key={reply.publicId} comment={reply} />
                        ))}
                    </div>
                )}

            </CardContent>
        </Card>
    );
}

const comments = [
    {
        publicId: "dsfsdf2323df",
        author: "Alice",
        text: "This is the first comment.",
        replies: [
            {
                publicId: "pipip",
                author: "Bob",
                text: "Reply to first comment.",
                replies: [
                    {
                        publicId: "2324234",
                        author: "Carol",
                        text: "Nested reply.",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        publicId: "dsfsdfdf",
        author: "Dave",
        text: "Another top-level comment.",
        replies: []
    }
];

export default function CommentThread(){
    return <div>
        {comments.map(comment => (
            <Comment key={comment.publicId} comment={comment} />
        ))}
    </div>
}