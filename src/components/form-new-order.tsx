import { FormEventHandler, useCallback, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/form-error';
import AddressInput from '@/components/address-input';
import { useAppDispatch } from '@/store/store';
import { addOrder } from '@/store/order-slice';
import { generateRandomId } from '@/utils/generate-random-id';
import { ORIGIN_ADDRESS, PREPARATION_TIME } from '@/constants';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

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

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
                origin: ORIGIN_ADDRESS,
                destination,
                travelMode: google.maps.TravelMode.DRIVING
            },
            (result, status) => {
                if (status == google.maps.DirectionsStatus.OK && result) {
                    const distance = result.routes[0].legs[0].distance?.text;
                    const time = result.routes[0].legs[0].duration?.value;

                    if (distance && time) {
                        dispatch(
                            addOrder({
                                id: generateRandomId(),
                                address: destination as string,
                                complement: inputComplementRef.current?.value,
                                description: inputDescriptionRef.current?.value,
                                distance,
                                timeDelivery: time + PREPARATION_TIME
                            })
                        );

                        onClose();
                        toast('Pedido cadastrado com sucesso', {
                            description:
                                'Você pode acompanhá-lo na tela de pedidos.',
                            action: {
                                label: 'Pedidos',
                                onClick: () => navigate('/pedidos')
                            }
                        });
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
