import { fetchContests } from "../api-client"
import ReactDOMServer from "react-dom/server"
import App from "../components/App"

const serverRender = async () => {
    const contests = await fetchContests()
    console.log(contests);

    const initialMarkup = ReactDOMServer.renderToString(
        <App initialData={{ contests }} />
    )

    return { initialMarkup, initialData: contests };
}

export default serverRender;