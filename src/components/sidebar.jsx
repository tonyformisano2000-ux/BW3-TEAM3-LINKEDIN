const styles = {
  btn: {},

  img: {},
};

const fetchAPI = (URL) => {
  fetch(URL)
    .then((response) => {
      if (!response) {
        console.log(response.status);
        return;
      }
      return response.json();
    })
    .then((data) => {
      handleData(data);
    })
    .catch((err) => console.log(err));
};

const SidebarDx = () => {
  return (
    <section className="d-flex flex-column">
      <div className="d-flex justify-content-between align-items-center">
        <h2>LinkedIn Notizie</h2>
        <svg></svg>
      </div>
      <div>
        <h3>Storie Principali</h3>
      </div>
      <div>
        <h3>Rompicapo di LinkedIn</h3>
      </div>
    </section>
  );
};

export default SidebarDx;
