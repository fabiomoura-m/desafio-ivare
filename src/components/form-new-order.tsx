import { FormEventHandler, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FormError from '@/components/form-error';

const FormNewOrder = () => {
    const [error, setError] = useState<string | undefined>('');

    const inputAddressRef = useRef<HTMLInputElement>(null);
    const inputComplementRef = useRef<HTMLInputElement>(null);
    const inputDescriptionRef = useRef<HTMLInputElement>(null);

    const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
        e.preventDefault();
        console.log(
            inputAddressRef.current?.value,
            inputDescriptionRef.current?.value,
            inputComplementRef.current?.value
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
                <Input
                    ref={inputAddressRef}
                    className="focus-visible:ring-slate-200 focus-visible:ring-offset-1 "
                    placeholder="Digite a rua e o número"
                />
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
