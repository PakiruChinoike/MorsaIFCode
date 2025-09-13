import React, { useState } from "react";
import Comentario from "./Comentario";

function Post({ postagem }) {
    const [likes, setLikes] = useState(postagem.likes || 0);
    const [comments, setComments] = useState(postagem.comments || []);

    const handleLike = () => {
        setLikes(likes + 1);
        // Optionally, send like to backend here
    };

    const handleAddComment = (commentText) => {
        const newComment = {
            userPhoto: postagem.userPhoto,
            userName: postagem.userName,
            text: commentText
        };
        setComments([...comments, newComment]);
        // Optionally, send comment to backend here
    };

    return (
        <div style={{
            background: "#fff",
            borderRadius: 16,
            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
            padding: 18,
            marginBottom: 24,
            maxWidth: 420
        }}>
            <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
                <img
                    src={postagem.userPhoto}
                    alt={postagem.userName}
                    style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        objectFit: "cover",
                        marginRight: 12
                    }}
                />
                <div style={{ fontWeight: 600, fontSize: 17 }}>{postagem.userName}</div>
            </div>
            <div style={{ marginBottom: 12 }}>
                <img
                    src={postagem.image}
                    alt="Post"
                    style={{
                        width: "100%",
                        maxHeight: 260,
                        objectFit: "cover",
                        borderRadius: 12
                    }}
                />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 10 }}>
                <button
                    onClick={handleLike}
                    style={{
                        background: "none",
                        border: "none",
                        color: "#1976d2",
                        fontWeight: 600,
                        fontSize: 16,
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    👍 Curtir
                </button>
                <span style={{ fontSize: 15, color: "#555" }}>{likes} curtidas</span>
            </div>
            <div style={{ marginBottom: 10 }}>
                <Comentario
                    userPhoto={postagem.userPhoto}
                    userName={postagem.userName}
                    onSend={handleAddComment}
                />
            </div>
            <div>
                {comments.map((c, idx) => (
                    <div key={idx} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        marginBottom: 8
                    }}>
                        <img
                            src={c.userPhoto}
                            alt={c.userName}
                            style={{
                                width: 28,
                                height: 28,
                                borderRadius: "50%",
                                objectFit: "cover",
                                marginTop: 2
                            }}
                        />
                        <div>
                            <div style={{ fontWeight: 500, fontSize: 14 }}>{c.userName}</div>
                            <div style={{ fontSize: 14, color: "#222" }}>{c.text}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Post;