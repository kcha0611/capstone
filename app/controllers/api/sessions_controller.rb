class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: { base: ["Invalid Credentials. Please try again."]}, status: 403
    end
  end

  def destroy
  		@user = current_user
  		if @user
  			logout!
  			render "/api/users/show"
  		else
  			render(
          json: {
            base: ["Nobody signed in"]
          },
          status: 404
        )
  		end
    end

end
