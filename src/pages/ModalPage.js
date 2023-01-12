import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleModalClose}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleModalClose} actionBar={actionBar}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo velit,
        porta in nunc nec, vulputate consectetur mauris. Aliquam mattis
        consequat metus, ac suscipit lectus ornare et. Donec eget ultrices elit.
        Donec id consectetur arcu, ut pharetra enim. Nullam pellentesque pretium
        dolor et pulvinar. Aenean non iaculis neque, vel commodo diam. Duis id
        magna id nibh tincidunt egestas a a tellus. Nunc dictum enim eu sem
        scelerisque imperdiet.
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo velit,
        porta in nunc nec, vulputate consectetur mauris. Aliquam mattis
        consequat metus, ac suscipit lectus ornare et. Donec eget ultrices elit.
        Donec id consectetur arcu, ut pharetra enim. Nullam pellentesque pretium
        dolor et pulvinar. Aenean non iaculis neque, vel commodo diam. Duis id
        magna id nibh tincidunt egestas a a tellus. Nunc dictum enim eu sem
        scelerisque imperdiet. Integer pharetra sed lectus sit amet gravida. In
        metus ante, interdum ac tortor sit amet, lobortis porttitor leo. Ut quam
        metus, commodo ac tellus ut, aliquam iaculis justo. Nunc tempus vel
        felis nec rhoncus. Fusce vel feugiat elit. Morbi feugiat sagittis
        tristique. Mauris sit amet ante eget purus hendrerit interdum nec eu
        ligula. Mauris finibus nibh tortor, vel commodo sapien convallis ut.
        Phasellus at laoreet urna. Curabitur facilisis finibus turpis. Donec
        fringilla mattis dui. Proin nec congue lacus. Proin vestibulum quam
        nulla, eget ornare dui iaculis ac. Nullam malesuada nisl vel
        sollicitudin tempor. Nullam vehicula egestas augue, id feugiat ipsum
        maximus at. Donec finibus nulla in placerat ullamcorper. Fusce rhoncus
        tincidunt nisi, eget fringilla diam condimentum in. Curabitur ex leo,
        vulputate et bibendum id, dignissim vel lacus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Mauris id tincidunt lectus, eget
        sollicitudin nibh. Sed convallis libero id venenatis rhoncus. Cras
        tempus sed nisi eget ullamcorper. Quisque accumsan ligula vitae lorem
        mollis semper. Aenean finibus orci at risus consectetur, at fermentum
        ipsum eleifend. Nunc vestibulum neque vitae iaculis pulvinar. Mauris
        dapibus at massa sodales efficitur. Quisque maximus, mauris convallis
        eleifend consectetur, orci ligula commodo risus, sit amet pharetra
        lectus nulla in sem. Aliquam erat volutpat. Maecenas vitae varius enim.
        Donec ac dolor orci. Sed quis posuere dui. Quisque ac ullamcorper dolor.
        Praesent id justo et leo pharetra imperdiet ut a tortor. Pellentesque
        sit amet mi erat. Etiam tristique ultrices ante, a accumsan elit iaculis
        a. Ut sagittis neque sit amet commodo faucibus. Praesent iaculis
        vulputate metus, scelerisque gravida justo accumsan sed. Sed lacinia,
        metus id bibendum consequat, dolor turpis feugiat nunc, eget cursus sem
        dolor quis nunc. Nulla non finibus nulla. Phasellus egestas maximus quam
        id rhoncus. Quisque id ligula viverra, elementum ipsum in, pulvinar
        mauris. Fusce cursus dignissim odio, et tristique elit iaculis a.
        Pellentesque in erat in eros elementum accumsan. Pellentesque lorem
        arcu, mattis at gravida eu, euismod quis dolor. Integer euismod vitae ex
        sit amet pulvinar. Aenean lobortis ex nisl, ut vestibulum mi ornare
        eget. Quisque vitae arcu ac odio eleifend tincidunt. In volutpat massa
        finibus purus porta luctus. Proin rutrum finibus nisl, ac tincidunt
        arcu. Aliquam eget fermentum massa. Etiam nibh velit, efficitur eget
        dictum vel, pharetra nec urna. Praesent sit amet consequat massa.
        Integer sed massa non mi tristique rutrum. Nullam eu leo sodales, porta
        mauris eget, consectetur augue. Suspendisse sed dolor varius velit
        tincidunt interdum. In sagittis quam et lectus scelerisque placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo velit,
        porta in nunc nec, vulputate consectetur mauris. Aliquam mattis
        consequat metus, ac suscipit lectus ornare et. Donec eget ultrices elit.
        Donec id consectetur arcu, ut pharetra enim. Nullam pellentesque pretium
        dolor et pulvinar. Aenean non iaculis neque, vel commodo diam. Duis id
        magna id nibh tincidunt egestas a a tellus. Nunc dictum enim eu sem
        scelerisque imperdiet. Integer pharetra sed lectus sit amet gravida. In
        metus ante, interdum ac tortor sit amet, lobortis porttitor leo. Ut quam
        metus, commodo ac tellus ut, aliquam iaculis justo. Nunc tempus vel
        felis nec rhoncus. Fusce vel feugiat elit. Morbi feugiat sagittis
        tristique. Mauris sit amet ante eget purus hendrerit interdum nec eu
        ligula. Mauris finibus nibh tortor, vel commodo sapien convallis ut.
        Phasellus at laoreet urna. Curabitur facilisis finibus turpis. Donec
        fringilla mattis dui. Proin nec congue lacus. Proin vestibulum quam
        nulla, eget ornare dui iaculis ac. Nullam malesuada nisl vel
        sollicitudin tempor. Nullam vehicula egestas augue, id feugiat ipsum
        maximus at. Donec finibus nulla in placerat ullamcorper. Fusce rhoncus
        tincidunt nisi, eget fringilla diam condimentum in. Curabitur ex leo,
        vulputate et bibendum id, dignissim vel lacus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Mauris id tincidunt lectus, eget
        sollicitudin nibh. Sed convallis libero id venenatis rhoncus. Cras
        tempus sed nisi eget ullamcorper. Quisque accumsan ligula vitae lorem
        mollis semper. Aenean finibus orci at risus consectetur, at fermentum
        ipsum eleifend. Nunc vestibulum neque vitae iaculis pulvinar. Mauris
        dapibus at massa sodales efficitur. Quisque maximus, mauris convallis
        eleifend consectetur, orci ligula commodo risus, sit amet pharetra
        lectus nulla in sem. Aliquam erat volutpat. Maecenas vitae varius enim.
        Donec ac dolor orci. Sed quis posuere dui. Quisque ac ullamcorper dolor.
        Praesent id justo et leo pharetra imperdiet ut a tortor. Pellentesque
        sit amet mi erat. Etiam tristique ultrices ante, a accumsan elit iaculis
        a. Ut sagittis neque sit amet commodo faucibus. Praesent iaculis
        vulputate metus, scelerisque gravida justo accumsan sed. Sed lacinia,
        metus id bibendum consequat, dolor turpis feugiat nunc, eget cursus sem
        dolor quis nunc. Nulla non finibus nulla. Phasellus egestas maximus quam
        id rhoncus. Quisque id ligula viverra, elementum ipsum in, pulvinar
        mauris. Fusce cursus dignissim odio, et tristique elit iaculis a.
        Pellentesque in erat in eros elementum accumsan. Pellentesque lorem
        arcu, mattis at gravida eu, euismod quis dolor. Integer euismod vitae ex
        sit amet pulvinar. Aenean lobortis ex nisl, ut vestibulum mi ornare
        eget. Quisque vitae arcu ac odio eleifend tincidunt. In volutpat massa
        finibus purus porta luctus. Proin rutrum finibus nisl, ac tincidunt
        arcu. Aliquam eget fermentum massa. Etiam nibh velit, efficitur eget
        dictum vel, pharetra nec urna. Praesent sit amet consequat massa.
        Integer sed massa non mi tristique rutrum. Nullam eu leo sodales, porta
        mauris eget, consectetur augue. Suspendisse sed dolor varius velit
        tincidunt interdum. In sagittis quam et lectus scelerisque placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo velit,
        porta in nunc nec, vulputate consectetur mauris. Aliquam mattis
        consequat metus, ac suscipit lectus ornare et. Donec eget ultrices elit.
        Donec id consectetur arcu, ut pharetra enim. Nullam pellentesque pretium
        dolor et pulvinar. Aenean non iaculis neque, vel commodo diam. Duis id
        magna id nibh tincidunt egestas a a tellus. Nunc dictum enim eu sem
        scelerisque imperdiet. Integer pharetra sed lectus sit amet gravida. In
        metus ante, interdum ac tortor sit amet, lobortis porttitor leo. Ut quam
        metus, commodo ac tellus ut, aliquam iaculis justo. Nunc tempus vel
        felis nec rhoncus. Fusce vel feugiat elit. Morbi feugiat sagittis
        tristique. Mauris sit amet ante eget purus hendrerit interdum nec eu
        ligula. Mauris finibus nibh tortor, vel commodo sapien convallis ut.
        Phasellus at laoreet urna. Curabitur facilisis finibus turpis. Donec
        fringilla mattis dui. Proin nec congue lacus. Proin vestibulum quam
        nulla, eget ornare dui iaculis ac. Nullam malesuada nisl vel
        sollicitudin tempor. Nullam vehicula egestas augue, id feugiat ipsum
        maximus at. Donec finibus nulla in placerat ullamcorper. Fusce rhoncus
        tincidunt nisi, eget fringilla diam condimentum in. Curabitur ex leo,
        vulputate et bibendum id, dignissim vel lacus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Mauris id tincidunt lectus, eget
        sollicitudin nibh. Sed convallis libero id venenatis rhoncus. Cras
        tempus sed nisi eget ullamcorper. Quisque accumsan ligula vitae lorem
        mollis semper. Aenean finibus orci at risus consectetur, at fermentum
        ipsum eleifend. Nunc vestibulum neque vitae iaculis pulvinar. Mauris
        dapibus at massa sodales efficitur. Quisque maximus, mauris convallis
        eleifend consectetur, orci ligula commodo risus, sit amet pharetra
        lectus nulla in sem. Aliquam erat volutpat. Maecenas vitae varius enim.
        Donec ac dolor orci. Sed quis posuere dui. Quisque ac ullamcorper dolor.
        Praesent id justo et leo pharetra imperdiet ut a tortor. Pellentesque
        sit amet mi erat. Etiam tristique ultrices ante, a accumsan elit iaculis
        a. Ut sagittis neque sit amet commodo faucibus. Praesent iaculis
        vulputate metus, scelerisque gravida justo accumsan sed. Sed lacinia,
        metus id bibendum consequat, dolor turpis feugiat nunc, eget cursus sem
        dolor quis nunc. Nulla non finibus nulla. Phasellus egestas maximus quam
        id rhoncus. Quisque id ligula viverra, elementum ipsum in, pulvinar
        mauris. Fusce cursus dignissim odio, et tristique elit iaculis a.
        Pellentesque in erat in eros elementum accumsan. Pellentesque lorem
        arcu, mattis at gravida eu, euismod quis dolor. Integer euismod vitae ex
        sit amet pulvinar. Aenean lobortis ex nisl, ut vestibulum mi ornare
        eget. Quisque vitae arcu ac odio eleifend tincidunt. In volutpat massa
        finibus purus porta luctus. Proin rutrum finibus nisl, ac tincidunt
        arcu. Aliquam eget fermentum massa. Etiam nibh velit, efficitur eget
        dictum vel, pharetra nec urna. Praesent sit amet consequat massa.
        Integer sed massa non mi tristique rutrum. Nullam eu leo sodales, porta
        mauris eget, consectetur augue. Suspendisse sed dolor varius velit
        tincidunt interdum. In sagittis quam et lectus scelerisque placerat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis leo velit,
        porta in nunc nec, vulputate consectetur mauris. Aliquam mattis
        consequat metus, ac suscipit lectus ornare et. Donec eget ultrices elit.
        Donec id consectetur arcu, ut pharetra enim. Nullam pellentesque pretium
        dolor et pulvinar. Aenean non iaculis neque, vel commodo diam. Duis id
        magna id nibh tincidunt egestas a a tellus. Nunc dictum enim eu sem
        scelerisque imperdiet. Integer pharetra sed lectus sit amet gravida. In
        metus ante, interdum ac tortor sit amet, lobortis porttitor leo. Ut quam
        metus, commodo ac tellus ut, aliquam iaculis justo. Nunc tempus vel
        felis nec rhoncus. Fusce vel feugiat elit. Morbi feugiat sagittis
        tristique. Mauris sit amet ante eget purus hendrerit interdum nec eu
        ligula. Mauris finibus nibh tortor, vel commodo sapien convallis ut.
        Phasellus at laoreet urna. Curabitur facilisis finibus turpis. Donec
        fringilla mattis dui. Proin nec congue lacus. Proin vestibulum quam
        nulla, eget ornare dui iaculis ac. Nullam malesuada nisl vel
        sollicitudin tempor. Nullam vehicula egestas augue, id feugiat ipsum
        maximus at. Donec finibus nulla in placerat ullamcorper. Fusce rhoncus
        tincidunt nisi, eget fringilla diam condimentum in. Curabitur ex leo,
        vulputate et bibendum id, dignissim vel lacus. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Mauris id tincidunt lectus, eget
        sollicitudin nibh. Sed convallis libero id venenatis rhoncus. Cras
        tempus sed nisi eget ullamcorper. Quisque accumsan ligula vitae lorem
        mollis semper. Aenean finibus orci at risus consectetur, at fermentum
        ipsum eleifend. Nunc vestibulum neque vitae iaculis pulvinar. Mauris
        dapibus at massa sodales efficitur. Quisque maximus, mauris convallis
        eleifend consectetur, orci ligula commodo risus, sit amet pharetra
        lectus nulla in sem. Aliquam erat volutpat. Maecenas vitae varius enim.
        Donec ac dolor orci. Sed quis posuere dui. Quisque ac ullamcorper dolor.
        Praesent id justo et leo pharetra imperdiet ut a tortor. Pellentesque
        sit amet mi erat. Etiam tristique ultrices ante, a accumsan elit iaculis
        a. Ut sagittis neque sit amet commodo faucibus. Praesent iaculis
        vulputate metus, scelerisque gravida justo accumsan sed. Sed lacinia,
        metus id bibendum consequat, dolor turpis feugiat nunc, eget cursus sem
        dolor quis nunc. Nulla non finibus nulla. Phasellus egestas maximus quam
        id rhoncus. Quisque id ligula viverra, elementum ipsum in, pulvinar
        mauris. Fusce cursus dignissim odio, et tristique elit iaculis a.
        Pellentesque in erat in eros elementum accumsan. Pellentesque lorem
        arcu, mattis at gravida eu, euismod quis dolor. Integer euismod vitae ex
        sit amet pulvinar. Aenean lobortis ex nisl, ut vestibulum mi ornare
        eget. Quisque vitae arcu ac odio eleifend tincidunt. In volutpat massa
        finibus purus porta luctus. Proin rutrum finibus nisl, ac tincidunt
        arcu. Aliquam eget fermentum massa. Etiam nibh velit, efficitur eget
        dictum vel, pharetra nec urna. Praesent sit amet consequat massa.
        Integer sed massa non mi tristique rutrum. Nullam eu leo sodales, porta
        mauris eget, consectetur augue. Suspendisse sed dolor varius velit
        tincidunt interdum. In sagittis quam et lectus scelerisque placerat.
      </p>
    </div>
  );
};

export default ModalPage;
