import { Autocomplete } from '@react-google-maps/api';
import { useRef, useCallback, Dispatch, SetStateAction } from 'react';
import { Input } from '@/components/ui/input';
import { handleKeyDownAddress } from '@/utils/form';

type AddressInputProps = {
    onLoad: (autocomplete: google.maps.places.Autocomplete) => void;
    onPlaceChanged: () => void;
    setDestination: Dispatch<
        SetStateAction<string | google.maps.LatLngLiteral | google.maps.Place>
    >;
    autocomplete: google.maps.places.Autocomplete | null;
};

const AddressInput = ({
    onLoad,
    onPlaceChanged,
    setDestination,
    autocomplete
}: AddressInputProps) => {
    const inputAddressRef = useRef<HTMLInputElement>(null);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                handleKeyDownAddress({
                    event,
                    autocomplete,
                    inputAddressRef,
                    setDestination
                });
            }
        },
        [autocomplete, setDestination]
    );

    return (
        <Autocomplete
            onLoad={autocomplete => onLoad(autocomplete)}
            onPlaceChanged={onPlaceChanged}
            options={{
                bounds: new google.maps.LatLngBounds(
                    new google.maps.LatLng(-19.033333, -48.333333), // sudoeste
                    new google.maps.LatLng(-18.866667, -48.166667) // nordeste
                ),
                strictBounds: true
            }}
        >
            <Input
                ref={inputAddressRef}
                className="focus-visible:ring-slate-200 focus-visible:ring-offset-1 "
                placeholder="Digite a rua e o número"
                onKeyDown={handleKeyDown}
            />
        </Autocomplete>
    );
};

export default AddressInput;
