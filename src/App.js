import {
  Header,
  FlexRow,
  SearchInput,
  Link,
  FlexColumn,
} from "./components/styled/generalComponents";
import "./normalize.css";
import Logo from "./assets/images/valtechLogo.png";
import BgImg from "./assets/images/sectionOneImage.png";

const App = () => {
  return (
    <>
      <Header>
        <img src={Logo} alt="Our Logo"height={56} width={266} />
        <FlexRow width={"450px"}>
          <h3>
            <Link href="#1">Section one</Link>
          </h3>
          <h3>
            <Link href="#2">Section two</Link>
          </h3>
          <h3>
            <Link href="#3">Section three</Link>
          </h3>
          <h3>
            <Link href="#4">Section four</Link>
          </h3>
        </FlexRow>
        <div>
          <SearchInput />{" "}
        </div>
      </Header>
      <main style={{ marginTop: 90 }}>
        <div
          style={{
            height: "800px",
            background: `url("${BgImg}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          id="1"
        >
          <FlexColumn justify="center">
            <h1>Section 1</h1>
            <FlexColumn
              style={{
                background: " #FFFFFF 0% 0% no-repeat padding-box",
                opacity: 0.82,
                width: "100vw",
                height: 255,
                marginTop: 220
              }}
              justify="center"
              
            >
              Lorem ipsum dolor sit amet, consectetur
            </FlexColumn>
          </FlexColumn>
        </div>
        <div style={{ height: "800px", background: "green" }} id="2">
          <h1>Section 1</h1>
        </div>
        <div style={{ height: "800px", background: "blue" }} id="3">
          <h1>Section 1</h1>
        </div>
        <div style={{ height: "800px", background: "yellow" }} id="4">
          <h1>Section 1</h1>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default App;
