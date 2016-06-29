class Api::UsersController < ApplicationController
  def new
  end

  def createjuansanchez
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "/api/#{@user}"
    else
      render
    end
  end

  def show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
