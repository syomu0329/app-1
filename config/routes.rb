Rails.application.routes.draw do
  root "quizs#index"
  resources :pokemons, only: [:index, :new]
  get "pokemon", to: "pokemons#view"
end
