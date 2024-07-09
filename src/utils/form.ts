type HandleKeyDownParams = {
    event: React.KeyboardEvent<HTMLInputElement>;
    autocomplete: google.maps.places.Autocomplete | null;
    inputAddressRef: React.RefObject<HTMLInputElement>;
    setDestination: React.Dispatch<
        React.SetStateAction<
            string | google.maps.LatLngLiteral | google.maps.Place
        >
    >;
};

export const handleKeyDownAddress = ({
    event,
    autocomplete,
    inputAddressRef,
    setDestination
}: HandleKeyDownParams) => {
    if (event.key === 'Enter' && autocomplete) {
        event.preventDefault();
        const service = new google.maps.places.AutocompleteService();
        service.getPlacePredictions(
            {
                input: inputAddressRef.current?.value || '',
                locationRestriction: new google.maps.LatLngBounds(
                    new google.maps.LatLng(-19.033333, -48.333333), // sudoeste
                    new google.maps.LatLng(-18.866667, -48.166667) // nordeste
                ),
                componentRestrictions: { country: 'br' }
            },
            (predictions, status) => {
                if (
                    status === google.maps.places.PlacesServiceStatus.OK &&
                    predictions &&
                    predictions.length > 0
                ) {
                    const placeId = predictions[0].place_id;
                    const placesService = new google.maps.places.PlacesService(
                        document.createElement('div')
                    );
                    placesService.getDetails({ placeId }, (place, status) => {
                        if (
                            status ===
                                google.maps.places.PlacesServiceStatus.OK &&
                            place &&
                            inputAddressRef.current
                        ) {
                            inputAddressRef.current.value =
                                place.formatted_address || '';
                            setDestination(place.formatted_address || '');
                        }
                    });
                }
            }
        );
    }
};

