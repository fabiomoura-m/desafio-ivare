import { FormEventHandler, useCallback, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/form-error';
import AddressInput from '@/components/address-input';

type FormNewOrderProps = {
    onClose: () => void;
};

const FormNewOrder = ({ onClose }: FormNewOrderProps) => {
    const [error, setError] = useState<string | undefined>('');
    const [destination, setDestination] = useState<
        google.maps.LatLngLiteral | string | google.maps.Place
    >('');
    const [autocomplete, setAutocomplete] =
        useState<google.maps.places.Autocomplete | null>(null);

    const inputComplementRef = useRef<HTMLInputElement>(null);
    const inputDescriptionRef = useRef<HTMLInputElement>(null);

    const onLoad = useCallback((ref: google.maps.places.Autocomplete) => {
        setAutocomplete(ref);
    }, []);

    const onPlaceChanged = useCallback(() => {
        if (autocomplete) {
            const place = autocomplete.getPlace();
            if (place.formatted_address) {
                setDestination(place.formatted_address);
            }
        }
    }, [autocomplete]);

    const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();

        const directionsService = new google.maps.DirectionsService();

        directionsService.route(
            {
                origin: 'Av. Rondon Pacheco, 1800 - Tabajaras, Uberlândia - MG, 38408-343',
                destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status == google.maps.DirectionsStatus.OK && result) {
                    const distance = result.routes[0].legs[0].distance?.text;
                    const time = result.routes[0].legs[0].duration?.value;

                    if (distance && time) {
                        console.log(distance, time);

                        onClose();
                    }
                }
                if (status === google.maps.DirectionsStatus.NOT_FOUND) {
                    setError('Preencha com um endereço válido!');
                }
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <AddressInput
                    onLoad={onLoad}
                    onPlaceChanged={onPlaceChanged}
                    setDestination={setDestination}
                    autocomplete={autocomplete}
                ></AddressInput>
                <Input
                    className="focus-visible:ring-slate-200 focus-visible:ring-offset-1 "
                    ref={inputComplementRef}
                    type="text"
                    placeholder="Complemento"
                />
                <Input
                    className="focus-visible:ring-slate-200 focus-visible:ring-offset-1 "
                    ref={inputDescriptionRef}
                    type="text"
                    placeholder="Descrição"
                />
                <FormError message={error} />
                <Button
                    type="submit"
                    className="bg-green-600 hover:bg-green-800 rounded-2xl max-w-48 w-full mx-auto"
                >
                    Cadastrar
                </Button>
            </div>
        </form>
    );
};

export default FormNewOrder;
