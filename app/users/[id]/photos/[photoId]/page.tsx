import React from "react";

interface Props {
  params: {
    id: number;
    photoId: number;
  };
}

const page = ({ params: { id, photoId } }: Props) => {
  return (
    <div>
      photos{photoId}
      <span>{id}</span>
    </div>
  );
};

export default page;
