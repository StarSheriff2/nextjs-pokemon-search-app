import React from 'react';
import Title from '../../atoms/Title';
import Text from '../../atoms/Text';

const CardBody = () => {
  return (
    <>
      <div>
        <Title>Pikachu</Title>
        <Text>Some description</Text>
      </div>
      <div>
        {/* {data.map((post) => ( */}
        <p>
          <a
            onClick={() => {}}
            // onClick={() => setPostId(post.id)}
            href="#"
            // style={
            //   // We can access the query data here to show bold links for
            //   // ones that are cached
            //   queryClient.getQueryData(['post', post.id])
            //     ? {
            //         fontWeight: 'bold',
            //         color: 'green',
            //       }
            //     : {}
            // }
          >
            {/* {post.title} */}
            Some link
          </a>
        </p>
        {/* // ))} */}
      </div>
    </>
  );
};

export default CardBody;
