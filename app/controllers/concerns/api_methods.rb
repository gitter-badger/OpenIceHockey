require 'json'

module ApiMethods
  extend ActiveSupport::Concern

  # Get number of records to limit
  def get_record_limit
    params[:limit] && params[:limit].to_i <= 200 ? params[:limit] : 20
  end

  # Get the offset
  def get_offset
    params[:offset] && params[:offset].to_i ? params[:offset].to_i : 0
  end

  def get_order
    if params[:order]
      order = params[:order].split("|").join(" ")
      order
    else
      "id ASC"
    end
  end

  # Pretty print based on the GET param pretty
  def pretty_print(jsonHash)
    if params[:pretty] then
      jsonHash = JSON.pretty_generate(jsonHash)
    end

    jsonHash
  end

  # Generate next and previous links
  def generate_pagination_links(endpoint, maximumNumber)
    nextUrl = "";
    prevUrl = "";
    currentOffset = self.get_offset
    allParams = request.GET

    # Get the next url
    if maximumNumber > (currentOffset.to_i + self.get_record_limit.to_i)
      allParams[:offset] = (currentOffset.to_i + self.get_record_limit.to_i)
      nextUrl = "#{Rails.application.config.api_url}/api/#{Rails.application.config.api_version}/#{endpoint}?#{allParams.to_query}"
    end

    # Get prev url
    if currentOffset > 0
      allParams[:offset] = (currentOffset.to_i - self.get_record_limit.to_i)
      prevUrl = "#{Rails.application.config.api_url}/api/#{Rails.application.config.api_version}/#{endpoint}?#{allParams.to_query}"
    end

    # Return the hash
    {
      prev: prevUrl,
      next: nextUrl
    }
  end

  # Error hash
  # Sent when any errors occur
  def error_response(status, message)
    {
      error: {
        status: status,
        message: message
      }
    }
  end
end
