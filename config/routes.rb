Rails.application.routes.draw do
  root to: 'pages#landing'
get "apropos", to: "pages#apropos"





  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
