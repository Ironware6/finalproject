-- Table: public.user_favorites

-- DROP TABLE public.user_favorites;

CREATE TABLE public.user_favorites
(
    email character varying(200) COLLATE pg_catalog."default" NOT NULL,
    pet_id integer NOT NULL,
    CONSTRAINT user_favorites_pkey PRIMARY KEY (email, pet_id),
    CONSTRAINT user_favorites_email_fkey FOREIGN KEY (email)
        REFERENCES public.users (email) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION,
    CONSTRAINT user_favorites_pet_id_fkey FOREIGN KEY (pet_id)
        REFERENCES public.favorites (pet_id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.user_favorites
    OWNER to postgres;