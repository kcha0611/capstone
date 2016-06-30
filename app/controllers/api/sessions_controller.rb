class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: ["Invalid Credentials"]
    end
  end

  def destroy
    @user = User.find_by_session_token(session[:session_token])
    @user.reset_session_token!
    render '/api/users/show'
  end
end
