import { useJsApiLoader, Libraries } from '@react-google-maps/api';

const libraries: Libraries = ['places'];

const useGoogleMapsLoader = () => {
    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
        libraries
    });

    return { isLoaded, loadError };
};

export default useGoogleMapsLoader;
