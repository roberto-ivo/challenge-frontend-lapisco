import React from "react";
import "./EmptyUsers.css";

export const EmptyUsers = () => {
  return (
    <div className="Card-empty">
      <div className="Card-row-empty">
        <img
          src={"http://cdn.onlinewebfonts.com/svg/img_351915.png"}
          alt={"emptyIcon"}
          className="Empty-img"
        />
        <strong className="Title-empty">Nenhum usuário encontrado</strong>
      </div>
    </div>
  );
};
