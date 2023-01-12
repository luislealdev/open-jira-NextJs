import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { es } from "date-fns/locale";

export const fromThenToNow = (date: number) => {
    const fromNow = formatDistanceToNow(date, { locale: es });

    return fromNow;
}