class DogsController < ApplicationController
  before_action :set_dog, only: [:show, :update, :destroy]
  def index
    @dogs = Dog.all
    render json: @dogs
  end

  def show
    render json: @dog
  end

  def create
    @dog = Dog.new(params)
  if @dog.save
    render json: @dog, status: :created
  else
    render json: @dog.errors, status: :unprocessable_entity
  end
  end

  def update
    if @dog.update(params)
      render json: @dog
    else
      render json: @dog.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @dog.destroy
  end

  def set_dog
    @dog = Dog.find(params[:id])
  end

  def cat_params
    params.require(:dog).permit(:name, :img_url, :breed)
  end
end
