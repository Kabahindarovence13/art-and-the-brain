import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function SEO(props) {
    const {title} = props;

    return(
        <HelmetProvider>
            <Helmet>
                <title>{title} |Dr.Amanda Tumusiime </title>
            </Helmet>
        </HelmetProvider>
    )
}