import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { api } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export const useNewsletter = () => {
    const { toast } = useToast();
    const [email, setEmail] = useState('');

    const mutation = useMutation({
        mutationFn: api.subscribeToNewsletter,
        onSuccess: (data) => {
            toast({
                title: "Success!",
                description: data.message,
            });
            setEmail(''); // Clear form on success
        },
        onError: (error: Error) => {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        },
    });

    const subscribe = (email: string) => {
        if (!email || !email.includes('@')) {
            toast({
                title: "Invalid Email",
                description: "Please enter a valid email address",
                variant: "destructive",
            });
            return;
        }
        mutation.mutate(email);
    };

    return {
        email,
        setEmail,
        subscribe,
        isLoading: mutation.isPending,
        isSuccess: mutation.isSuccess,
    };
};
